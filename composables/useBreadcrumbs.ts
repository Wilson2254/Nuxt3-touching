let crumbs = ref([{ title: "Главная", url: "/" }]);

function changeCrumb(crumb) {
  const existingCrumbIndex = crumbs.value.findIndex(
    (item) => crumb.title === item.title
  );
  if (existingCrumbIndex === -1) {
    crumbs.value.push(crumb);
    return;
  }
  crumbs.value.length = existingCrumbIndex + 1;
}

export function useBreadcrumbs() {
  return { crumbs, changeCrumb };
}
