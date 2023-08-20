import React from "react";
import { AuthPage } from "../../layouts/Auth/ui/AuthPage";
import SignUp from "../../components/Auth/Forms/SignUp";
import { PublicLayout } from "../../layouts/Auth/PublicLayout";

export default function SignupPage() {
  return (
    <PublicLayout>
      <AuthPage>
        <SignUp />
      </AuthPage>
    </PublicLayout>
  );
}
