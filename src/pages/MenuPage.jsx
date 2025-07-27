import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../features/menu/menuSlice";

export default function MenuPage() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.menu.items);
  const cart = useSelector((state) => state.menu.cart);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-3xl font-bold mb-6 border-b pb-2">📋 今日菜單</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            
            <div key={item.id} className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <div className="text-xl font-semibold">{item.name}</div>
              <div className="text-gray-600">${item.price}</div>
              <button
                className="mt-2 px-4 py-1 bg-green-500 text-white rounded-full hover:bg-green-600"
                onClick={() => dispatch(addToCart(item.id))}
              >
                加入餐點
              </button>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t pt-6">
          <h3 className="text-2xl font-bold mb-4">🛒 購物車</h3>
          {cart.length === 0 ? (
            <p className="text-gray-500">尚未選擇餐點</p>
          ) : (
            <ul className="space-y-2">
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{item.name} - ${item.price}</span>
                  <button
                    className="text-sm text-red-500 hover:text-red-700"
                    onClick={() => dispatch(removeFromCart(index))}
                  >
                    移除
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4 text-lg font-semibold">總金額：${total}</div>
          <div className="mt-2">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
              disabled={cart.length === 0}
              onClick={() => {
                alert("訂單已送出！");
                dispatch(clearCart());
              }}
            >
              ✅ 結帳
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
