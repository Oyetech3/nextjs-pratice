import Card from "@/app/component/Card";
import Link from "next/link";

const ArchiveNotifications = () => {
    return ( 
        <div>
            <Card>
                <div>Notifications</div>
                <Link href={"/dashboard"} className="text-blue-500 hover:underline mx-2">Default</Link>
            </Card>
        </div>
     );
}
 
export default ArchiveNotifications;