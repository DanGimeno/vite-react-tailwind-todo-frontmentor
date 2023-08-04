import IconMoon from "./icons/IconMoon";
const Header = () => {
    return (
        <header className="container mx-auto px-6 pt-8">
            <div className="mx-4 mt-3 flex justify-between">
                <h1 className="text-2xl font-bold uppercase tracking-[0.55em] text-white">
                    Todo
                </h1>
                <button>
                    <IconMoon />
                </button>
            </div>
        </header>
    );
};
export default Header;
