import { CapacitorConfig } from "@capacitor/cli"
import { KeyboardResize } from "@capacitor/keyboard"

const config: CapacitorConfig = {
	appId: "com.example.app",
	appName: "angular-and-ionic-issues",
	webDir: "www",
	bundledWebRuntime: false,
	plugins: {
		Keyboard: {
			resize: KeyboardResize.Native,
		},
	},
}

export default config
