import Card from "@/app/component/Card";
import Link from "next/link";

const Notifications = () => {
    return ( 
        <div>
            <Card>
                <div>Notifications</div>
                <Link href={"/dashboard/archived"} className="text-blue-500 hover:underline mx-2">Archived</Link>
            </Card>
        </div>
     );
}
 
export default Notifications;