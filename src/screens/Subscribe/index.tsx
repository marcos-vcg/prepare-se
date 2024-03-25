import { useNavigation } from "@react-navigation/native"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth, createUser } from "utils/authentication"
import DefaultView from "~/components/DefaultView"
// import { firestore } from  "@react-native-firebase/firestore"


export const Subscribe = () => {
    const [name, setName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const { goBack } = useNavigation()
    const auth = getAuth()

    const handleSubscribe = () => {
        if (name && email && password) {
            createUser(email, password)
        }
    }

    // const handleSubscribeFirestore = () => {
    //     if (name && email && password) {
    //         createUserWithEmailAndPassword(auth, email, password).then((response) => {
    //             firestore().collection('users').add({
    //                 id: response.user.uid,
    //                 name,
    //                 email,
    //                 password
    //             })
    //                 .then(() => "User created at collection users on firestore")
    //                 .catch(() => alert("User not created at firestore"))
    //             console.log("User created")
    //         })
    //             .catch((error) => {
    //                 error.code === 'auth/email-already-in-use' && console.log("Email address already in use!")
    //                 error.code === 'auth/invalid-email' && console.log("Email address is invalid!")
    //                 console.error(error)
    //             })
    //             .finally()
    //     }
    // }

    const handleCancel = () => {
        goBack
    }



    return (
        <DefaultView>

        </DefaultView>
    )
}