export default async function ({ $auth, redirect, next }) {
  if (!$auth.loggedIn) {
    return next();
  }
  return redirect({ name: "inicio" });
}
