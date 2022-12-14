import React from "react";
import { UseFormRegister, useFormContext } from "react-hook-form";

type Props = {
	register?: UseFormRegister<any>;
	placeholder?: string;
	label: string;
	classoverride?: string;
	textarea?: boolean | false
	id?: string;
	type?: string | "text";
};

const Input = React.forwardRef<
	HTMLInputElement | HTMLTextAreaElement,
	Props & ReturnType<UseFormRegister<any>>
>(({ placeholder, label, classoverride, id, onChange, onBlur, name, type, textarea }, ref) => {
	const { formState: { errors } } = useFormContext();
	return (
		<div className="mb-3">
			{label &&
				<label htmlFor={id} className="text-gray-500 text-sm dark:text-gray-200">
					{label}
				</label>
			}
			{!textarea ? <input
				id={id}
				placeholder={placeholder}
				type={type}
				onChange={onChange}
				onBlur={onBlur}
				name={name}
				ref={(ref as any)}
				className={
					"text-gray-600 dark:text-white rounded-lg p-2 border-2 border-gray-300  dark:border-gray-500 w-full bg-gray-50 focus-visible:outline-none dark:bg-gray-700 " + classoverride + `${errors[name] ? " focus-visible:ring-red-500 focus-visible:border-red-500" : "focus-visible:ring-blue-500 focus-visible:border-blue-500"}`
				}
			/> : <textarea
				id={id}
				placeholder={placeholder}
				onChange={onChange}
				onBlur={onBlur}
				name={name}
				ref={(ref as any)}
				className={
					"text-gray-600 dark:text-white rounded-lg p-2 border-2 border-gray-300  dark:border-gray-500 w-full bg-gray-50 focus-visible:outline-none dark:bg-gray-700 " + classoverride + `${errors[name] ? " focus-visible:ring-red-500 focus-visible:border-red-500" : "focus-visible:ring-blue-500 focus-visible:border-blue-500"}`
				}
			/>}
			{errors[name] && (
				<p className="text-red-500 block h-10 -mb-7 mt-1">{(errors[name]?.message as string)}</p>
			)}
		</div>
	)
});

Input.displayName = "Input";

export default Input;
