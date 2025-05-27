function AdminBanner() {
	return (
		<div className="bg-dark-grey-500 font-bold text-white">
			<div className="mx-auto flex max-w-6xl flex-col items-center justify-between px-2 py-4 md:flex-row">
				<p className="font-bold">
					Authenticated as admin, drafts will be visible.
				</p>
				<div className="flex items-center justify-center gap-4">
					<a
						href="/admin"
						className="hover:text-redleather-500 hover:underline"
					>
						Go to Admin Panel
					</a>
					<span>|</span>
					<a
						href="/admin/logout"
						className="hover:text-redleather-500 hover:underline"
					>
						Logout
					</a>
				</div>
			</div>
		</div>
	);
}

export { AdminBanner };
