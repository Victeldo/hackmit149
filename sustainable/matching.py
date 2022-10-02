import json

def distance_eval(s_radius, c_distance):
    if s_radius >= c_distance:
        return 1
    else:
        return 0
def urgency_eval(c, s):
    if (c == 0 or c == s):
        # Return a positive value to add to the percentage ultimately
        return 1

    else:
        # It would have to be that the client needs it now, but the supplier doesn't, so it would be important and have a detrimental effect on the percentage
        return 0

def transportation_eval(c_list, s_list):
    score = 0
    for c_val in c_list:
        if c_val in s_list:
            score += 1
        else:
            continue

    return score / len(c_list)

def amount(c, s):
    if (s >= c):
        return 1
    else:
        return s/c

def food_eval(obj_f, sup_f):
    sup_dict = {}
    for f, amt in sup_f:
        sup_dict[f]=amt
    res = 0
    for f, amt in obj_f:
        if f in sup_dict:
            res += amount(amt,sup_dict[f])
    return res/len(obj_f)

def overall_compatibility(obj1, sup, f_imp_fact):
   if f_imp_fact == 1:
       food = (0.3 * food_eval(obj1['food'], sup['food']))
       urgency = (0.2 * urgency_eval(obj1['urgency'], sup['urgency']))
       transportation = (0.1 * transportation_eval(obj1['transport'], sup['transport']))
       distance = (0.4 * distance_eval(obj1['radius'], sup['distance']))
       return (food + urgency + transportation + distance)
   else:
       food = (0.45 * food_eval(obj1['food'], sup['food']))
       urgency = (0.15 * urgency_eval(obj1['urgency'], sup['urgency']))
       transportation = (0.10 * transportation_eval(obj1['transport'], sup['transport']))
       distance = (0.30 * distance_eval(obj1['radius'], sup['distance']))
       return (food + urgency + transportation + distance)
    

def best_singular(obj1, l_sup, f_imp_fact):
    # Return list of tuples (supplier object, compatibility percentage) of the best few suppliers for the client 
    res = []
    for sup in l_sup:
        res.append((overall_compatibility(obj1, sup, f_imp_fact), sup))
    return sorted(res,key=lambda x: x[0],reverse=True)[:5]

def best_combinations(obj1, l_sup):
    # Return list of tuples (2 supplier objects, compatibility percentage) of the best few combinations for the client
    res = []
    l_sup_cpy = l_sup
    for sup1 in l_sup:
        l_sup1_food = []
        for f, amt in sup1['food']:
            l_sup1_food.append(f)
        comp1 = overall_compatibility(obj1, sup1, 2)
        obj_mod = obj1
        for f, amt in obj1['food']:
           if f in obj_mod and f in l_sup1_food:
               obj_mod['food'].remove((f, amt))
        l_sup_cpy.remove(sup1)
        l_compl = best_singular(obj_mod, l_sup_cpy, 2)
        for comp2, sup2 in l_compl:
            res.append(((comp1 + comp2)/2, sup1, sup2))
    return sorted(res,key=lambda x: x[0],reverse=True)[:5]

def format_result(sup, cli):
    l_cli_food = []
    for f, amt in cli['food']:
        l_cli_food.append(f)
    sup_res = {
        'name': sup['name'],
        'food': [],
        'distance': sup['distance'],
        'urgency': sup['urgency'],
        'transport': sup['transport']
    }
    for f, amt in sup['food']:
        if f in l_cli_food:
            sup_res['food'].append((f,amt))
    return sup_res

def main(json_inp):
    '''
    Takes a json of form:
    {
        "client": {"radius":int, "food":[(string,int)], "urgency":bool, "transport":[string]},
        "suppliers": [{"name":string, "distance":int, "food":[(string,int)], "urgency":bool, "transport":[string]})
    }

    Returns:
    {
        "singular": [("supplier":{"name":string, "food":[(string,int)], "distance":int, "urgency":bool, "transport":[string]}, "compatibility":float)],
        "combinations": [("supplier1":{<same as above>},"supplier2":{<same as above>}",compatibility":float)]
    }
    '''
    
    inp = json.loads(json_inp)
    cli = inp['client']
    l_sup = inp['suppliers']

    singular = best_singular(cli, l_sup, 1)
    res_sing = []
    for comp, sup in singular:
        res_sing.append((format_result(sup, cli), comp))

    combinations = best_combinations(cli, l_sup)
    res_comb= []
    for comp, sup1, sup2 in combinations:
        res_comb.append((format_result(sup1, cli), format_result(sup2, cli), comp))

    result = {"singular": res_sing, "combinations": res_comb}
    return json.dumps(result)
