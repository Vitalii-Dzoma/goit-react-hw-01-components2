import data from '../../data.json'
import propTypes from 'prop-types';
import React from "react";
import s from "./Statistics.module.css"

function Statistics({title, stats}) {
return (
        <section className="statistics">
            {title && <h2 className="title">{title}</h2>}
            <ul className={s.statList}>
                {stats.map(item => 
                    <li className={s.item} key = {item.id} >
                        <span className={s.percentage}>{item.label}</span>
                        <span className={s.percentage}>{item.percentage}</span>
                    </li>
                )}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: propTypes.string,
    stats: propTypes.arrayOf(
        propTypes.shape(
            {
                id: propTypes.string.isRequired,
                label: propTypes.string,
                percentage:propTypes.number             
            }
        )
    )
}

export default Statistics;