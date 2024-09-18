export default function ticket () {
    return (
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <form>
                <input placeholder="Add Ticket" className="text-2xl bg-transparent rounded-lg border-none focus:outline-none text-black-800 dark:text-gray-400 mb-4"></input>
                {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Add Ticket</h5> */}
                <input placeholder="Enter Details of Event" className="bg-transparent rounded-lg border-none focus:outline-none text-black-800 dark:text-gray-400 mb-4"></input>
                <input placeholder="Enter Date of Event" className="bg-transparent rounded-lg border-none focus:outline-none dark:text-gray-400"></input>
            </form>
        </div>

    )
}