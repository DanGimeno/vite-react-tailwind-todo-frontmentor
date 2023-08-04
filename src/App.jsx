import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
    return (
        <div className="min-h-screen bg-gray-100 bg-[url(./assets/images/bg-mobile-light.jpg)] bg-contain bg-no-repeat">
            <header className="container mx-auto px-6 pt-8">
                <div className="mx-4 mt-3 flex justify-between">
                    <h1 className="text-2xl font-bold uppercase tracking-[0.55em] text-white">
                        Todo
                    </h1>
                    <button>
                        <MoonIcon className="fill-red-600" />
                    </button>
                </div>
                <form className="gap mt-10 flex items-center overflow-hidden rounded-md bg-white py-4 text-xs">
                    <span className="mx-5 inline-block h-5 w-5 rounded-full border-2"></span>
                    <input
                        type="text"
                        placeholder="Create a new todo..."
                        className="w-full text-gray-600 outline-none"
                    ></input>
                </form>
            </header>

            <main className="container mx-auto mt-5 px-6">
                <div className="rounded-md bg-white [&>article]:p-4">
                    <article className="flex gap-4 border-b border-b-gray-100">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="grow text-xs text-gray-600">
                            Complete online Javascript course
                        </p>
                        <button className="">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex gap-4 border-b border-b-gray-100">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="grow text-xs text-gray-600">
                            Complete online Javascript course
                        </p>
                        <button className="">
                            <CrossIcon />
                        </button>
                    </article>

                    <section className="flex justify-between px-4 py-4 text-xs text-gray-600">
                        <span>5 Items Left</span>
                        <button>Clear Completed</button>
                    </section>
                </div>
            </main>

            <section className="container mx-auto mt-4 px-6">
                <div className="flex justify-center gap-4 rounded-md bg-white py-4 text-center text-sm font-semibold text-gray-600">
                    <button className="hover:text-blue-600">All</button>
                    <button className="hover:text-blue-600">Active</button>
                    <button className="hover:text-blue-600">Completed</button>
                </div>
            </section>

            <section className="container mx-auto mt-8 px-6 text-center text-sm text-gray-600">
                <p>Drag and drop to reorder list</p>
            </section>
        </div>
    );
};

export default App;
