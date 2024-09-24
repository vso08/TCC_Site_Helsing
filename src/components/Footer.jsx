import Logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer class="bg-black text-white p-4 bg-opacity-90">
      <div class="container mx-auto flex justify-center items-center gap-2">
        <div class="flex space-x-4">
          <img src={Logo} className="w-20"></img>
        </div>
        <p class="text-sm">&copy; 2024. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
