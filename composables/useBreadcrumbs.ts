//TODO: переделать костыльную реализацию (криво отрабатывает при перезагрузки страницы)

type Breadcrumbs = {
  title: string;
  url: string;
  category?: string;
};

let crumbs: Array<Breadcrumbs> = ref([{ title: "Главная", url: "/" }]);

function changeCrumb(crumb: Breadcrumbs) {
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
