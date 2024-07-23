import { useState } from "react";
import { categories } from "../data/categories";
export default function Form() {

  const [activity, setActivity] = useState({
    category: 1,
    name: '',
    calories: 0
  });

  const handleChange = (e) => {
    setActivity({
      ...activity,
      [e.target.id]: e.target.value
    });
  }

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">
          Categoría:
        </label>
        <select
          id="category" value={activity.category}
          onChange={handleChange}
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
        >
          {categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">
          Actividad:
        </label>
        <input
          type="text"
          id="name"
          value={activity.name}
          onChange={handleChange}
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
        />
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">
          Calorías:
        </label>
        <input
          type="number"
          id="calories"
          value={activity.calories}
          onChange={handleChange}
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Calorías. Ej. 300 0 500"
        />
      </div>

      <input
        type="submit"
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
        value="Guardar comida o Guardar Ejercicio"
      />
    </form>
  );
}
