import React from "react";
import styles from './SearchResult.module.css'
import { BusinessRating } from "../../../BusinessRating/BusinessRating";
export function SearchResult(){
    return(
        <div className={styles['search-result']}>
            <img src="https://placehold.co/210" alt='business' className={styles['business-image']}/>
            <div className={styles['business-info']}>
                <h2 className="subtitle">Burger Place</h2>
                <BusinessRating/>
                <p>$$ <span className="tag"> Burger </span>  <span className="tag"> Fast Food </span></p>
            </div>
            <div className={styles['contact-info']}>
                <p>+00123456789</p>
                <p>Example Street 5</p>
                <p>23456 Berlin</p>
            </div>
            
        </div>
    );
}