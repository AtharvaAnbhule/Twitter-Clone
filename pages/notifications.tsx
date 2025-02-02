import Header from "@/components/Header";
import NotificationsFeed from "@/components/NotificationsFeed";
import { NextPageContext } from "next";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";

//to protect the notifications page from unauthor4ized access
export async function getServerSideProps(context:NextPageContext) {

    const session=await getSession(context);

    if(!session){
        return {
            redirect:{
                destination:"/",
                permanent:false
            }
        }
    }
    
    return {
        props:{
            session
        }
    }

}


const Notifications = () => {
    return (
        <>

        <Header label="Notifications" showBackArrow/>
        <NotificationsFeed />

        </>
    )
};

export default Notifications;