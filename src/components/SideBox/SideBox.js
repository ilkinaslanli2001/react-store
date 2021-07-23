import React from 'react';
import classes from "./sidebox.module.css";
import {ReactComponent as Cancel} from "../../media/svg/cancel.svg";
import Checkbox from "../Checkbox/Checkbox";

import {useDispatch, useSelector} from "react-redux";
import {clearFilters, removeFilter} from "../../store/actions/simpleActions";

function SideBox(props) {
    var filters = ["Boy", "Man", "Watch", "Kids", "Sports", "Bags", "Sneakers"]

    const {user_filters} = useSelector((state) => state.simpleReducer)
    const dispatch = useDispatch()
    return (
        <div className={classes.sidebox_wrapper}>
            <div className={classes.top}>
                <div className={classes.title}>
                    <h4>Filters</h4><span onClick={() => {
                    dispatch(clearFilters())
                }}>Clear all</span>
                </div>
                <ul className={classes.user_filter}>
                    {
                        user_filters.map((userFilter, key) => {
                            return <li onClick={() => {
                                dispatch(removeFilter(userFilter))
                            }} key={key}>{userFilter} <p><Cancel/></p></li>
                        })
                    }
                </ul>
            </div>
            <div className={classes.filters}>
                <div className={classes.filter}>
                    <h5>Category</h5>
                    <div className={classes.filter_list}>
                        {filters.map((filter, key) => {
                            return <Checkbox key={key} title={filter}/>
                        })}

                    </div>
                </div>
            </div>

        </div>
    );
}

export default SideBox;