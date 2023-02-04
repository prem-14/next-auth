import React from 'react'
import styles from "./styles.module.scss"

function Header({ country }) {
    return (
        <div className={styles.flex}>
            <h2>Header</h2>
            <strong>Country name: {country.name}</strong>
            <img src={country.flag} alt="country flag" width={100} />
        </div>
    )
}

export default Header