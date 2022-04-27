export default async ({ $auth, redirect, next }) => {
  let user = await $auth.user;

  if (!user) {
    return redirect({ name: "login" });
  }

  if (user.status == 0) {
    await this.$auth.logout();
    return redirect({ name: "login" });
  }

  return next();
}
