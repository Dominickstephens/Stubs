export default function img () {
    return (
        <div className="block w-64 h-64 p-6 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <form className="h-full flex flex-col justify-between">
                <input placeholder="Add Images" className="text-2xl bg-transparent rounded-lg border-none focus:outline-none text-black-800 dark:text-gray-400 mb-4"></input>
                <input placeholder="Attach Files" className="bg-transparent rounded-lg border-none focus:outline-none text-black-800 dark:text-gray-400 mb-4"></input>
            </form>
        </div>

    )
}