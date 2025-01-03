function Home() {
    return (
        <div className="flex justify-center items-center h-screen">
            <a href="/login" className="bg-blue-500 text-white px-4 py-2 rounded m-2 hover:scale-95">Login</a>
            <a href="/register" className="bg-green-500 text-white px-4 py-2 rounded m-2 hover:scale-95">Register</a>
        </div>
    );
}
export default Home;
