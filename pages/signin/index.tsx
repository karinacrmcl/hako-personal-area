import React from "react";
import { AuthPage } from "../../layouts/Auth/ui/AuthPage";
import SignIn from "../../components/Auth/Forms/SignIn";
import { PublicLayout } from "../../layouts/Auth/PublicLayout";

export default function SigninPage() {
  return (
    <PublicLayout>
      <AuthPage>
        <SignIn />
      </AuthPage>
    </PublicLayout>
  );
}
