import { SHARED_PACKAGE_NAME } from "@refcore/shared";

export default function HomePage(): React.ReactElement {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <p>Refcore web app is running ({SHARED_PACKAGE_NAME} loaded).</p>
    </main>
  );
}
