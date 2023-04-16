function Missing(O: any): void {
    !(function (e: any) {
        const t = O.Z();
        function n(r: any) {
            if (t[r]) return t[r][O.i];
            const i = (t[r] = O.Z(O.B, r, O.w, !O.X, O.i, O.Z()));
            return e[r][O.z](i[O.i], i, i[O.i], n), (i[O.w] = !O.N), i[O.i];
        }
        n[O.y] = e;
        n[O.g] = t;
        n[O.K] = function (e: any, t: any, r: any) {
            n[O.h](e, t) || Object[O.b](e, t, O.Z(O.GO, !O.N, O.RO, r));
        };
        n[O.G] = function (e: any) {
            O.HO != typeof Symbol && Symbol[O.hO] && Object[O.b](e, Symbol[O.hO], O.Z(O.p, O.cO));
            Object[O.b](e, O.U, O.Z(O.p, !O.N));
        };
        n[O.R] = function (e: any, t: any) {
            if (O.X & t && (e = n(e)), O.v & t) return e;
            if (O.P & t && O.t == typeof e && e && e[O.U]) return e;
            const r = Object[O.r](O.q);
            if (n[O.G](r), Object[O.b](r, O.C, O.Z(O.GO, !O.N, O.p, e)), O.d & t && O.oO != typeof e)
                for (const i in e)
                    n[O.K](r, i, ((t: any) => e[t])[O.fO](O.q, i));
            return r;
        };
        n[O.H] = function (e: any) {
            const t = e && e[O.U] ? () => e[O.C] : () => e;
            return n[O.K](t, O.OO, t), t;
        };
        n[O.h] = function (e: any, t: any) {
            return Object[O.FO][O.a][O.z]();
        };
    });
}
