"use client";

import { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState<number | "">("");
  const [num2, setNum2] = useState<number | "">("");
  const [operator, setOperator] = useState("add");
  const [result, setResult] = useState<number | null>(null);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (num1 === "" || num2 === "") return;

    const n1 = Number(num1);
    const n2 = Number(num2);

    let res: number;
    switch (operator) {
      case "add":
        res = n1 + n2;
        break;
      case "subtract":
        res = n1 - n2;
        break;
      case "multiply":
        res = n1 * n2;
        break;
      case "divide":
        res = n2 !== 0 ? n1 / n2 : NaN;
        break;
      default:
        res = NaN;
    }
    setResult(res);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white">
      <form
        onSubmit={calculate}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg space-y-4 w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-center">Calculator</h1>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value === "" ? "" : +e.target.value)}
          placeholder="Number 1"
          required
          className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value === "" ? "" : +e.target.value)}
          placeholder="Number 2"
          required
          className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
        />
        <select
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
          className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
        >
          <option value="add">+</option>
          <option value="subtract">-</option>
          <option value="multiply">*</option>
          <option value="divide">/</option>
        </select>
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded"
        >
          Calculate
        </button>
        {result !== null && (
          <div className="mt-4 text-center text-xl font-medium">
            Result: {isNaN(result) ? "Invalid Operation" : result}
          </div>
        )}
      </form>
    </div>
  );
}
