const Animations = `
	animation: pop var(--animation-btn, 0.25s) ease-out;
	text-transform: var(--btn-text-case, uppercase);
	&:active:hover,
	&:active:focus {
		animation: none;
	}
	&:active:hover,
	&:active:focus {
		transform: scale(var(--btn-focus-scale, 0.95));
	}
	@keyframes pop {
		0% {
			transform: scale(var(--btn-focus-scale, 0.95));
		}
		40% {
			transform: scale(1.02);
		}
		100% {
			transform: scale(1);
		}
	}
`;

export default Animations;
