/* ========================================================================== */
/*                       What can I get from typescript?                      */
/* ========================================================================== */

const jsDocFeatures = {
  // for coding
  "member completions": () => {
		class Person {
			firstName?: string;
			lastName?: string;
		}

		const person = new Person();
		return person./* TODO add your code here */;
	},

  "parameters completions": () => {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    function sum(a: number, b: number) {
      return a + b;
    }

    return sum(/* TRY MR! add your code here */);
  },

  "refactoring all references": () => {
		const isTrue = false;

		if (isTrue) return 'this is true';
		if (!isTrue) return 'this is false';

		/* notice an issue with the name? You can "refactor" it with 1 shortcut */
		/* TODO command+shift+r on vsCode; or shift-F6 on IntelliJ */
	},

  // for debugging
  "jump to references and definitions": () => {
		const variableFromAnotherFile = 'variable content';

		return variableFromAnotherFile;
		/* TODO try: "peek implementation", and add shortcut to that */
		/* TODO try: "peek references", and add shortcut to that */
	},
};

const typescriptFeatures = {
  // for coding
  "member completions, with support of access modifiers": () => {
		class Person {
			public firstName?: string;
			private age!: number;
			public get canDrink() {
				return this.age > 21;
			}
		}

		/** @type {Person} */
		const person = new Person();
		return person.age; /* TODO don't tell people about my exact age */
	},

  "parameters completions, with more complex types (e.g. objects, keyof, interfaces, unions, enums)": () => {
		enum Countries {
			USA = 'USA',
			UK = 'UK',
			CANADA = 'CANADA',
		}

		class Location {
			country: keyof typeof Countries;
			name?: string;
			city?: string;
			latitude?: number;
			longitude?: number;
		}

		function getCountry(location: Location) {
			return location./* TODO get complex member */;
		}

		getCountry({ /* TODO complete this object to make a valid call */ });
	},

  "overloading methods with generic types": () => {
		function aggregate<ValueType extends string | number>(value1: ValueType, value2: ValueType) {
			if (typeof value1 === 'string' || typeof value2 === 'string') {
				return value1.toString() + value2.toString();
			}

			if (typeof value1 === 'number' && typeof value2 === 'number') {
				return value1 + value2;
			}
		}

		const sum = aggregate(/* TODO pass some values to this function */);
		const concat = aggregate(/* TODO pass some values to this function */);
	},

  "override members, and let the editor check its validity for you": () => {
		class Animal {
			say() {
				return `Ah!!!!!!!`;
			}
		}

		class Fox extends Animal {
			override say() {
				/* TODO What does the fox say? */
			}
		}
	},

  "catching all potentially undefined values": () => {
		type NameResponse = {
			status: number;
			data?: {
				name: string;
			};
		}

		async function getData(url: string) {
			const response: NameResponse = await fetch(url);
			return response.data.name; /* TODO unsafe code here */
		}
	},

  "author types for lib that don't have types yet": () => {
		// e.g. jSecure, which is global variable you can never get types of
		const sanitizedUrl = jSecure./* TODO say you want to sanitize 'https://shady.com' */;
	},

  "you safely pass in parameters to a function": () => {
		// e.g. constructor using assertions
		class SmartPhone {
			weight!: number;
			screenSize!: number;
			batteryCapacity!: number;

			get price() {
				return this.weight * this.screenSize * this.batteryCapacity;
			}

			constructor(specifications: Specification) {
				Object.assign(this, specifications);
			}
		}

		const smartPhone = new SmartPhone({
			weight: 196,
			screenSize: 456,
			/* TODO what else is missing here */
		});

		type Specification = Pick<SmartPhone, 'weight' | 'screenSize' | 'batteryCapacity' | 'wheelSize'>
		/* TODO a type that relates to the class that matter, so you can't accidentally add wrong properties */
	},

  // future
  "editor validates tracking schema for you": () => {
		return 'https://kshum-ts-promo/tracking-with-typescript';
	},

  "editor validates graphql schema for you": () => {
		return 'https://kshum-ts-promo/graphql-demo';
	},
};

/* ========================================================================== */
/*                        I’m excited, how can I help?                        */
/* ========================================================================== */

const easyOptions = [
  "refactor leaf modules",
  "refactor constants, native classes, etc.",
];

const mediumOptions = [
  "refactor components",
  "refactor services",
  "refactor controllers",
  "refactor routes",
];

const hardOptions_shouldWait = [
  "ember data models", // should wait until ember data gets more support, to wait for graphql adoption
];

/* ========================================================================== */
/*                      I’m excited, how can I get help?                      */
/* ========================================================================== */

const help = {
  lss: {
    askUiChannel() {
      return "#lss-ui";
    },
  },
  linkedin: {
    cloneTicketToTsEarlyAdoptersSupport() {
      return "https://go/kshum-ts-promo/ts-support-ticket";
    },
    slackChannel() {
      return "#typescript";
    },
		toolings() {
			return 'https://go/typescript';
		}
  },
  "self-help": {
    codeSearch() {
      return [
        "https://go/kshum-ts-promo/code-search",
        "https://kshum-ts-promo/github-search",
      ];
    },
  },
};
