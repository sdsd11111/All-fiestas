export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
  <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Todo Fiesta Importadora</h3>
            <p className="text-primary-foreground/80">Tu aliado para la fiesta perfecta desde octubre 2024</p>
          </div>

          <div className="border-t border-primary-foreground/20 pt-6">
            <p className="text-sm text-primary-foreground/70">
              Diseñado por{" "}
              <a
                href="https://cesarreyesjaramillo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors font-medium"
              >
                @cesarreyesjaramillo.com
              </a>{" "}
              2025 Todo Fiesta Importadora. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
