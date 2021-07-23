import React, {useEffect, useState} from 'react';

import OrderCard from "../OrderCard/OrderCard";
import classes from "./home.module.css";
import {useDispatch, useSelector} from "react-redux";
import {setOrderPopUp} from "../../store/actions/simpleActions";
import PopUpWrapper from "../PopUpWrapper/PopUpWrapper";
import OrderDetail from "../OrderDetail/OrderDetail";
import SideBox from "../SideBox/SideBox";
import useFirestore from "../../hooks/useFirestore";
import Loading from "../Loading/Loading";
import {ReactComponent as FilterLogo} from "../../media/svg/filter.svg";
import {Grid} from "@material-ui/core";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import FiltersMobile from "../FiltersMobile/FiltersMobile";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function Home(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const {order_visible, loading, user_filters} = useSelector((state) => state.simpleReducer)

    const {height, width} = useWindowDimensions();
    useEffect(() => {
        if (width >= 1182) {
            setFilterMobileOpen(false)
        }
    }, [width])
    const {orders} = useFirestore("orders")
    const [selectedOrder, setSelectedOrder] = useState([])
    const [filterMobileOpen, setFilterMobileOpen] = useState(false)
    const dispatch = useDispatch()
    const onOrderClick = (data) => {
        setSelectedOrder(data)
        dispatch(setOrderPopUp(true))
    }
    let checker = (arr, target) => target.every(v => arr.includes(v));
    const renderOrders = () => {
        console.log()
        if (user_filters.length === 0) {
            console.log(user_filters)
            return orders.map((order, key) => {
                return <div key={key} className={classes.order_card_wrapper} onClick={() => {
                    onOrderClick(order)
                }}>
                    <OrderCard order={order}/>
                </div>

            })
        } else {

            return orders.map((order, key) => {

                if (checker(order.tags, user_filters)) {

                    return <div key={key} className={classes.order_card_wrapper}
                                onClick={() => {
                                    onOrderClick(order)
                                }}>
                        <OrderCard order={order}/>
                    </div>
                }

            })
        }
    }
    return loading ? <Loading/> :
        <div className={classes.home_wrapper}>
            {filterMobileOpen ? <PopUpWrapper right_corner={false} left_corner={true}><FiltersMobile
                setFilterMobileOpen={setFilterMobileOpen}/></PopUpWrapper> : false}
            <SideBox/>
            {order_visible && <PopUpWrapper><OrderDetail selectedOrder={selectedOrder}/></PopUpWrapper>}
            <button onClick={() => {
                setFilterMobileOpen(true)
            }} className={classes.filterbtn_mobile}><FilterLogo/>Filters
            </button>
            <div className={classes.orders_wrapper}>
                {renderOrders()}
            </div>

        </div>

}

export default Home;