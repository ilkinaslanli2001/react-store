import {useState, useEffect} from "react";
import {projectFirestore} from "../firebase/config";
import {useDispatch} from "react-redux";
import {setLoading} from "../store/actions/simpleActions";

export default function useFirestore(data) {

    const [orders, setOrders] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setLoading(true))
        const unsub = projectFirestore.collection(data)

            .onSnapshot((snap) => {

                let documents = []
                snap.forEach(doc => {

                    documents.push({...doc.data(), id: doc.id})

                })
                dispatch(setLoading(false))
                setOrders(documents)
            })
        return () => unsub()
    }, [data])
    return {orders}
}
