import { Action, action, thunk, Thunk } from "easy-peasy";
import { toast } from "react-toastify";
import ToastUI from "bets-components/ToastUI/ToastUI.js";
const betsModel = {
	setLoggedInUser: action((state, payload) => {
		state.loggedInUser = payload;
	}),
	loginUser: thunk(async (actions, payload, { getStoreActions }) => {

		if (payload.email === "test@gmail.com" && payload.password === "12345") {
			toast.success(<ToastUI message={"Logged In Successfully!"} type={"Success"} />, {
				toastId: "toast-show",
			});
			actions.setLoggedInUser(payload);
			sessionStorage.setItem('isLoggedIn', '1');
			return true;
		} else {
			toast.error(<ToastUI message={"Invalid Credentials!"} type={"Error"} />, {
				toastId: "toast-show",
			});
			return false;
		}
	}),
	logoutUser: thunk(async (actions, payload, { getStoreActions }) => {
			toast.dismiss();
			actions.setLoggedInUser(null);
			sessionStorage.removeItem('isLoggedIn');
			return true;
	}),
};

export default betsModel;
