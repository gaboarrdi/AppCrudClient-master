export default function Home() {
  return (
    <section className="flex items-center justify-center h-[100vh]">
      <div className="flex flex-col items-center">
        <h2 className="m-[1rem] font-extrabold text-[30px]">Faça seu Login</h2>
        <form
          action=""
          method="post"
          className="flex flex-col gap-2 w-[100%] max-w-[100%]"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              name="email"
              className="p-[10px] bg-green-50 outline-none rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              className="p-[10px] bg-green-50 outline-none rounded"
            />
          </div>
          <div>
            <p>
              Nao tem conta? <span>Cadastre-se!</span>
            </p>
          </div>
          <button className="bg-green-400 p-[10px] rounded text-white">
            Entrar
          </button>

          <fieldset className="border-t border-slate-50 mt-[10px]">
            <legend className="mx-auto px-4 text-1xl italic">ou</legend>
            <div className="pt-4">
              <p>Acesse com o seu:</p>
            </div>
          </fieldset>
          <button className="bg-slate-500 p-[10px] rounded text-white">
            GitHub
          </button>
        </form>
      </div>
    </section>
  );
}
