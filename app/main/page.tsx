import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {hasPermission, Role} from "@/app/auth";

export default function MainPage() {
    const user: { id: string, role: Role } = {role: "user", id: '2'}
    // const user: { id: string, role: Role } = {role: "admin", id: '2'}
    // const user: { id: string, role: Role } = {role: "moderator", id: '2'}
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle><h1>Judicka</h1></CardTitle>
                </CardHeader>
                <CardContent><p>Ohhh tuhan tolonglah akuuu, hapuskan rasa cintaku</p></CardContent>
                {hasPermission(user, "delete::comments") && (
                    <CardFooter>
                        <Button variant={"destructive"}>Delete</Button>
                    </CardFooter>
                )}
            </Card>
        </div>
    )
}