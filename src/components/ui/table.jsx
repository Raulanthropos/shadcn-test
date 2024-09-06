// src/components/ui/table.jsx

import React from "react"

export function Table({ children }) {
  return <table className="min-w-full divide-y divide-gray-200">{children}</table>
}

export function TableBody({ children }) {
  return <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
}

export function TableCell({ children, className }) {
  return <td className={`px-6 py-4 whitespace-nowrap ${className}`}>{children}</td>
}

export function TableHead({ children, className }) {
  return <th scope="col" className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${className}`}>{children}</th>
}

export function TableHeader({ children }) {
  return <thead className="bg-gray-50">{children}</thead>
}

export function TableRow({ children }) {
  return <tr>{children}</tr>
}

export function TableCaption({ children }) {
  return <caption className="text-sm text-gray-500">{children}</caption>
}
