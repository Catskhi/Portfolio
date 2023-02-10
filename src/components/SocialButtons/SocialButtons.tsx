import { SocialButton } from "./SocialButton";

export function SocialButtons() {
    return (
        <div className="flex justify-center mt-3">
            <SocialButton link="https://www.linkedin.com/in/catskhi/"
                text="LinkedIn"
                className={`
                bg-blue-500
                hover:bg-blue-600
                `}
                buttonClass={'bi bi-linkedin'}
            />
            <SocialButton link="https://github.com/Catskhi"
                text="GitHub"
                className={`
                bg-slate-600
                hover:bg-slate-700
                `}
                buttonClass={'bi bi-github'}
            />
        </div>
    )
}