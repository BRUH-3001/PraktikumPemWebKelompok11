import React, { useState } from 'react';

const Masuk = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Mencoba masuk dengan:', { username, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="p-8 bg-white rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Masuk</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="username">
              Nama Pengguna
            </label>
            <input
              className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="username"
              type="text"
              placeholder="Masukkan nama pengguna"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Kata Sandi
            </label>
            <input
              className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="password"
              type="password"
              placeholder="Masukkan kata sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full transition duration-200"
              type="submit"
            >
              Masuk
            </button>
          </div>
          <div className="text-center mb-4">
            <a className="inline-block align-baseline font-semibold text-sm text-blue-600 hover:text-blue-800 transition duration-200" href="#lupa-sandi">
              Lupa Kata Sandi?
            </a>
          </div>
          <div className="text-center mt-6 pt-6 border-t border-gray-200">
            <span className="text-sm text-gray-600">Belum punya akun? </span>
            <a className="inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-800 transition duration-200" href="#daftar">
              Daftar sekarang
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Masuk;