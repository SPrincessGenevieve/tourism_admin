import BackgroundGradientContianer from "@/components/login/BackgroundGradientContianer"
import LoginForm from "@/components/login/LoginForm"

export default function Page() {
  return (
    <div className="relative h-screen w-full">
      <BackgroundGradientContianer>
        <LoginForm></LoginForm>
      </BackgroundGradientContianer>
    </div>
  )
}
