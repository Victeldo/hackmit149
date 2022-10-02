import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function ClientForm() {
    const [radius , setRadius] = useState('');
    const [foodItem , setFoodItem] = useState('');
    const [foodQuantity , setFoodQuantity] = useState('');
    const [urgency , setUrgency] = useState('');
    const [transport , setTransport] = useState('');

    const handleSetRadius =(e)=> {
        setRadius(e.target.value);
    }

    const handleSetFoodItem =(e)=> {
        setFoodItem(e.target.value);
    }

    const handleSetFoodQuantity =(e)=> {
        setFoodQuantity(e.target.value);
    }

    const handleSetUrgency =(e)=> {
        setUrgency(e.target.value);
    }

    const handleSetTransport =(e)=> {
        setTransport(e.target.value);
    }

    const handleSubmit =(e)=> {
        fetch("/server/request", {
            method:"POST",
            cache: "no-cache",
            headers: {
                "content_type":"application/json",
            },
            body:JSON.stringify(this.state.value)
            }
        ).then(response => {
            return response.json()
      })
    }

return (
    <form onSubmit={ (e)=> {handleSubmit(e)}}>
        <label>
        Radius:
        <input type="number" name="radius" required onChange={ (e)=> {handleSetRadius(e)}}/>
        </label> <label>
        Food Item:
        <input type="text" name ="foodItem" required onChange={ (e)=> {handleSetFoodItem(e)}}/>
        </label> <label>
        Food Quantity:
        <input type="number" name ="foodQuantity" required onChange={ (e)=> {handleSetFoodQuantity(e)}}/>
        </label> <label>
        Urgency:
        <input type="checkbox" name ="urgency" required onChange={ (e)=> {handleSetUrgency(e)}}/>
        </label> <label>
        Transport Options:
        <input type="text" name ="transport" required onChange={ (e)=> {handleSetTransport(e)}}/>
        </label>
        <input type="submit" value="Submit"/>
    </form>
  );
}

export default ClientForm;