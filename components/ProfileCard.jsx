import { Field } from "formik";

export const ProfileCard = ({ item, onCancel, isEdit, onEdit, disabled }) => {
  return (
    <div className="container w-full bg-white shadow-lg transform duration-200 easy-in-out">
      <div className=" h-32 overflow-hidden">
        <img className="w-full" src="/img/profile-bg.jpg" alt="" />
      </div>
      <div className="flex justify-center px-5 -mt-12">
        <img
          className="h-32 w-32 bg-white p-2 rounded-full"
          src={item.picture}
          alt=""
        />
      </div>
      <div className=" ">
        <div className="text-center px-14">
          {isEdit ? (
            <Field name="name">
              {({
                field, // { name, value, onChange, onBlur }
                form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                meta,
              }) => (
                <div>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Name"
                    {...field}
                  />
                  {meta.touched && meta.error && (
                    <p className="text-sm text-left text-red-600">
                      {meta.error}
                    </p>
                  )}
                </div>
              )}
            </Field>
          ) : (
            <h2 className="text-gray-800 text-3xl font-bold break-words">
              {item.name}
            </h2>
          )}
          <p className="text-gray-400 mt-2">{item.email}</p>
        </div>
        <br />
        {isEdit ? (
          <div className="flex bg-gray-50 ">
            <button onClick={onCancel} className="btn-error text-center w-1/2">
              Cancel
            </button>
            <div className="border"></div>
            <button type="submit" className="btn-primary text-center w-1/2">
              Save
            </button>
          </div>
        ) : (
          <button
            disabled={disabled}
            onClick={onEdit}
            className="btn-primary w-full"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};
