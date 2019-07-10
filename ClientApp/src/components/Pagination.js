import React from 'react'
import { Link } from 'react-router-dom'
//import { CustomerMain } from './Customer/CustomerMain';



export const Pagination = ({postsPerPage,totalPosts,locationurl,paginate}) => {
    //displayName = Pagination.name
    const pageNumbers=[];

    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++)
    {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
            {pageNumbers.map(number=>(
            <li key={number} className='page-item'>
                <a onClick={()=>paginate(number)} 
                 href={locationurl}
                //href='./Customer/CustomerMain'
                 className='page-link'>
                    {number}
                </a>
            </li>))}
                
            </ul>

        </nav>
    )
}



