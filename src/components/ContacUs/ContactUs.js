import React, {useState, useCallback, useEffect} from 'react';
import classes from './contactus.module.css'
import {ReactComponent as RightArrow} from "../../media/svg/left.svg";
import {useDispatch, useSelector} from "react-redux";
import firebase from "firebase";
import {setLoading} from "../../store/actions/simpleActions";
import Result from "../Result/Result";
import {ERROR, SUCCESS} from "../../constants";

function ContactUs(props) {
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState(0)
    const db = firebase.firestore();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const onChangeHandler = useCallback(
        ({target: {name, value}}) => setInputs(state => ({...state, [name]: value}), [])
    );
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: ""
    })
    useEffect(() => {
        dispatch(setLoading(false))
    }, [])


    const dispatch = useDispatch()
    const {loading} = useSelector((state) => state.simpleReducer)

    const onSubmitClick = () => {
        const ch_errors = {
            name: "",
            email: "",
            message: ""
        }
        if (inputs.message?.replace(/\s/g, "").length === 0 || !inputs.message) {

            ch_errors.message = "Message cant be empty"
        }
        if (inputs.name?.replace(/\s/g, "").length === 0 || !inputs.name) {
            ch_errors.name = "Name cant be empty"
        }
        if (inputs.email?.replace(/\s/g, "").length === 0 || !inputs.email) {
            ch_errors.email = "Email cant be empty"
        }
        setErrors(ch_errors)

        if (ch_errors.name === "" && ch_errors.email === "" && ch_errors.message === "" && inputs !== {} && loading === false) {

            dispatch(setLoading(true))


            db.collection("messages").add({
                name: inputs.name,
                email: inputs.email,
                message: inputs.message
            }).then((data) => {
                dispatch(setLoading(false))
                setResult(SUCCESS)
            }).catch((err) => {
                dispatch(setLoading(false))
                setResult(ERROR)
            });


        }

    }
    return (
        <div className={classes.wrapper}>
            {result !== 0 && <Result type={result}/>}
            <div className={classes.container}>
                <h1>Contact Us</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className={classes.form}>
                    <input key="name" name="name" onChange={onChangeHandler} value={inputs.name}
                           placeholder={"Your name"}/>
                    {errors.name !== "" && <span className={classes.error}>{errors.name}</span>}
                    <input key="email" name="email" onChange={onChangeHandler} value={inputs.email}
                           placeholder={"Your Email"}/>
                    {errors.email !== "" && <span className={classes.error}>{errors.email}</span>}
                    <input key="message" name="message" onChange={onChangeHandler} value={inputs.message}
                           placeholder={"Your Message"}/>
                    {errors.message !== "" && <span className={classes.error}>{errors.message}</span>}
                    <button onClick={() => {
                        onSubmitClick()
                    }}>{loading ? <div className={classes.loader}></div> : <>SUBMIT <RightArrow/></>}</button>

                </div>
            </div>
        </div>
    );
}

export default ContactUs;