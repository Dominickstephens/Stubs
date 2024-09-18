export default function ticket () {
    return (
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Add Ticket</h5>
            <input placeholder="Enter Title of Event" className="rounded-lg font-normal text-black-800 dark:text-gray-400 mb-4"></input>
            <input placeholder="Enter Details of Event" className="rounded-lg font-normal dark:text-gray-400"></input>
        </div>
    )
}