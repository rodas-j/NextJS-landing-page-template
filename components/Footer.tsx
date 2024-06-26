import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10">
      <div className="mx-auto w-full max-w-screen-xl p-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/">
            <span className="text-2xl font-semibold">Email Digest</span>
          </Link>
          <div className="text-right">
            <Link href="/terms" className="mx-12">
              Terms of Service
            </Link>
            <Link href="/privacy">
            Privacy Policy
            </Link>
          </div>
        </div>
        <hr className="my-2 text-muted-foreground sm:mx-auto " />
        <span className="block text-sm text-muted-foreground sm:text-center">
          © {new Date().getFullYear()}{" "}
          <a
            target="_blank"
            href="https://tryEmailDigest.vercel.app/"
            className="hover:underline"
          >
            Email Digest
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
