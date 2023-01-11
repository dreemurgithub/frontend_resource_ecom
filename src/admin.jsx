import {useEffect, useState} from "react";
import admin_fetch from "./API/admin";
function Manage(){
    const [Product_list,set_list] = useState()
    useEffect(async ()=>{
        const response = await admin_fetch.getProduct()
        console.log(response)
        set_list(response)
    },[])
    if(Product_list ===null || Product_list=== undefined || Product_list=== 'Not admin') return null;
    if(Product_list !==null && Product_list!== undefined )    return <div>
        <table style={{margin:'0 auto 0 auto'}}>
            <div style={{padding:'1em'}}>
                <h3>Search</h3>
                <input type="text" placeholder='Enter Search'/>
            </div>
            <tr>
                <th style={{border:'1px solid black'}}>ID</th>
                <th style={{border:'1px solid black'}}>Name</th>
                <th style={{border:'1px solid black'}}>Price</th>
                <th style={{border:'1px solid black'}}>Image</th>
                <th style={{border:'1px solid black'}}>Category</th>
                <th style={{border:'1px solid black'}}>Edit</th>
            </tr>
            {Product_list.map(el=>{
                return <tr>
                    <td style={{width:'10em' ,border:'1px solid black'}}>{el._id}</td>
                    <td style={{width:'15em',border:'1px solid black'}}>{el.name}</td>
                    <td style={{width:'6em',border:'1px solid black'}}>{el.price.toLocaleString()} VND</td>
                    <td style={{width:'6em',border:'1px solid black'}}>
                        <img src={el.img1}  style={{width:'6em'}}/>
                    </td>
                    <td style={{width:'10em',border:'1px solid black'}}>{el.category}</td>
                    <td style={{width:'10em',border:'1px solid black'}}>
                        <button className='btn btn-outline-dark btn-sm'>Edit</button>
                        <button className='btn btn-outline-dark btn-sm'>Update</button></td>
                </tr>
            })}
        </table>
    </div>
}

export default Manage