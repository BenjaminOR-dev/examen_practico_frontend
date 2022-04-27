export default async ({ $auth, redirect, next }) => {
  let user = await $auth.user;

  if (user) {
    return redirect({ name: "inicio" });
  }

  if (user.activo == 0) {
    await this.$auth.logout();
    return redirect({ name: "login" });
  }

  return next();
};
