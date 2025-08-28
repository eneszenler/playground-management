import Session from "./components/Session"
import {bookings} from "./components/data"

export default function ActiveSessionsPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {
                bookings.map((booking) => (
                    <Session data={booking} key={booking.id}/>
                ))
            }
        </div>
    )
}
