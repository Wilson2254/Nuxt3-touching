const isModalOpen = ref(false);

function modalOpen() {
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}

export default function useModal() {
  return { isModalOpen, modalOpen, closeModal };
}
