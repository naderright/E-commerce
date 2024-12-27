import { removeCart } from '@/API/slices/CartSlice';
import { addOrder } from '@/API/slices/OrderSlice';
import { CreateId } from '@/utilts/CreateId';
export const CreateOrder = (cartItems, dispatch,auth,amount) => {
    const cartUser = cartItems.filter((item) => item.user == auth.email);
    const date = new Date()
    const orderUser = {
        id: CreateId(),
        user: auth.email,
        items: cartUser,
        amount: amount,
        date: date.toLocaleDateString("en-US"),
        time: date.toLocaleTimeString()
    }

    
    dispatch(addOrder(orderUser))
    dispatch(removeCart())
}