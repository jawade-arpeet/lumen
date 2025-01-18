import Button from "../components/button.tsx";

function ConfirmEmailPage() {
  return (
    <>
      <h4 className="text-2xl font-semibold leading-[0.95] mt-2">
        Please verify your email account.
      </h4>
      <p className="text-sm mt-2 text-stone-500">
        We have sent you an email to verify your email address. Please check
        your inbox and click the link to verify your email address.
      </p>
      <Button className="mt-4">Resend Email</Button>
    </>
  );
}

export default ConfirmEmailPage;
