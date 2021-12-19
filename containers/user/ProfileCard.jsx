import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ProfileCard } from "../../components";
import { useUpdateProfile } from "./graphql";

const UpdateProfileSchema = Yup.object().shape({
  name: Yup.string().required("This field is required"),
});

export const ProfileCardContainer = () => {
  const { user, error, isLoading, checkSession } = useUser();
  const [isEdit, setIsEdit] = useState(false);
  const [updateProfile, { data, loading, error: updateError }] =
    useUpdateProfile();
  if (isLoading) return <div>Loading...</div>;

  const handleSubmit = async (values, { resetForm }) => {
    await updateProfile({
      variables: {
        input: {
          ...values,
        },
      },
    });
    await checkSession();
    setIsEdit(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: user.name }}
      onSubmit={handleSubmit}
      validationSchema={UpdateProfileSchema}
    >
      {(props) => (
        <Form>
          <ProfileCard
            item={user}
            isEdit={isEdit}
            initialValues={{ name: user.name }}
            onCancel={() => {
              props.resetForm();
              setIsEdit(false);
            }}
            onEdit={() => setIsEdit(true)}
            disabled={!user.sub.includes("auth0|")}
          />
        </Form>
      )}
    </Formik>
  );
};
